const PROCEDIMENTOS = {
  "Corte": 1,
  "Hidratação": 1,
  "Coloração": 2,
  "Escova progressiva sem formol": 3,
  "Escova simples": 1
};

const ORIGEM_LEAD = "Landing Page Monica Hair";

const form = document.getElementById("bookingForm");
const messageEl = document.getElementById("bookingMessage");
const submitButton = document.getElementById("bookingSubmit");
const dataInput = document.getElementById("data");

const webhookUrl = window.MONICA_CONFIG?.APPS_SCRIPT_URL || "";

// ==========================================
// UTILITÁRIOS
// ==========================================

function showMessage(type, text) {
  if (!messageEl) return;

  messageEl.className = `booking-message ${type}`;
  messageEl.textContent = text;
}

function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function isValidBrazilianMobile(phone) {
  const digits = onlyDigits(phone);

  return /^[1-9]{2}9\d{8}$/.test(digits);
}

function getDateAtNoon(dateValue) {
  return new Date(`${dateValue}T12:00:00`);
}

function isAllowedWeekday(dateValue) {
  const date = getDateAtNoon(dateValue);
  const day = date.getDay();

  // Segunda-feira = 1
  // Sábado = 6
  return day >= 1 && day <= 6;
}

function isValidBusinessHour(hourValue) {
  if (!hourValue) return false;

  const [hour, minute] = hourValue.split(":").map(Number);
  const totalMinutes = hour * 60 + minute;

  // Atendimento: 09:00 às 18:00
  return totalMinutes >= 540 && totalMinutes < 1080;
}

// ==========================================
// CONFIGURAÇÃO DA DATA MÍNIMA
// ==========================================

if (dataInput) {
  const hoje = new Date();

  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  dataInput.min = `${ano}-${mes}-${dia}`;
}

// ==========================================
// VALIDAÇÃO DO FORMULÁRIO
// ==========================================

function validateForm(payload) {
  if (!payload.nome) {
    return "Por favor, informe seu nome completo.";
  }

  if (!isValidBrazilianMobile(payload.telefone)) {
    return "Por favor, informe um número de celular válido com DDD (Ex: 11999999999).";
  }

  if (!payload.data) {
    return "Por favor, selecione uma data para o agendamento.";
  }

  if (!isAllowedWeekday(payload.data)) {
    return "Nosso salão atende de segunda-feira a sábado. Por favor, escolha outro dia.";
  }

  if (!payload.hora) {
    return "Por favor, selecione um horário para o agendamento.";
  }

  if (!isValidBusinessHour(payload.hora)) {
    return "Nosso horário de atendimento é das 09h às 18h. Por favor, escolha outro horário.";
  }

  if (!payload.procedimento) {
    return "Por favor, selecione o procedimento desejado.";
  }

  return null;
}

// ==========================================
// ENVIO DO AGENDAMENTO
// ==========================================

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!webhookUrl) {
      showMessage(
        "error",
        "O serviço de agendamento não está configurado no momento."
      );

      return;
    }

    const formData = new FormData(form);

    const payload = {
      nome: String(formData.get("nome") || "").trim(),

      telefone: onlyDigits(
        formData.get("telefone")
      ),

      data: String(
        formData.get("data") || ""
      ),

      hora: String(
        formData.get("hora") || ""
      ),

      procedimento: String(
        formData.get("procedimento") || ""
      ).trim(),

      origem: ORIGEM_LEAD
    };

    // --------------------------------------
    // Validação local
    // --------------------------------------

    const validationError = validateForm(payload);

    if (validationError) {
      showMessage("error", validationError);
      return;
    }

    // --------------------------------------
    // Estado de envio
    // --------------------------------------

    submitButton.disabled = true;
    submitButton.textContent = "Enviando solicitação...";

    showMessage("", "");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",

        // Mantemos text/plain para evitar
        // preflight OPTIONS desnecessário.
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },

        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(
          `Erro HTTP ${response.status}`
        );
      }

      const result = await response.json();

      // --------------------------------------
      // Contrato de resposta
      // --------------------------------------

      if (!result.success) {
        throw new Error(
          result.message ||
          "Não foi possível registrar o agendamento."
        );
      }

      // --------------------------------------
      // Sucesso
      // --------------------------------------

      showMessage(
        "success",
        result.message ||
        "Recebemos sua solicitação de agendamento. Em breve entraremos em contato para confirmar o melhor horário para você."
      );

      form.reset();

      // Reaplica a data mínima após o reset.
      if (dataInput) {
        const hoje = new Date();

        const ano = hoje.getFullYear();
        const mes = String(hoje.getMonth() + 1).padStart(2, "0");
        const dia = String(hoje.getDate()).padStart(2, "0");

        dataInput.min = `${ano}-${mes}-${dia}`;
      }

    } catch (error) {
      console.error(
        "Erro ao enviar agendamento:",
        error
      );

      showMessage(
        "error",
        "Não foi possível enviar sua solicitação no momento. Por favor, tente novamente."
      );

    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Solicitar agendamento";
    }
  });
}
