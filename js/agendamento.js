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

const webhookUrl = window.MONICA_CONFIG?.APPS_SCRIPT_URL || "";

function showMessage(type, text) {
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
  return day >= 1 && day <= 6;
}

function isValidBusinessHour(hourValue) {
  if (!hourValue) return false;

  const [hour, minute] = hourValue.split(":").map(Number);
  const totalMinutes = hour * 60 + minute;

  return totalMinutes >= 540 && totalMinutes < 1080;
}

function validateForm(payload) {
  if (!payload.nome || !payload.telefone || !payload.data || !payload.hora || !payload.procedimento) {
    return "Por favor, preencha todos os campos obrigatórios.";
  }

  if (payload.nome.trim().length < 3) {
    return "Por favor, informe o nome completo.";
  }

  if (!isValidBrazilianMobile(payload.telefone)) {
    return "Por favor, informe um celular brasileiro válido com DDD. Exemplo: 11999999999.";
  }

  if (!isAllowedWeekday(payload.data)) {
    return "Não realizamos atendimentos aos domingos. Por favor, escolha uma data de segunda-feira a sábado.";
  }

  if (!isValidBusinessHour(payload.hora)) {
    return "O atendimento está disponível de segunda-feira a sábado, das 09:00 às 18:00.";
  }

  if (!PROCEDIMENTOS[payload.procedimento]) {
    return "Por favor, selecione um procedimento válido.";
  }

  if (!webhookUrl) {
    return "Configuração do agendamento pendente. Informe a URL do Apps Script.";
  }

  return null;
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const payload = {
      nome: String(formData.get("nome") || "").trim(),
      telefone: onlyDigits(formData.get("telefone")),
      data: String(formData.get("data") || ""),
      hora: String(formData.get("hora") || ""),
      procedimento: String(formData.get("procedimento") || ""),
      origem: ORIGEM_LEAD
    };

    const validationError = validateForm(payload);

    if (validationError) {
      showMessage("error", validationError);
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Enviando solicitação...";
    showMessage("", "");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });

      showMessage(
        "success",
        "Recebemos sua solicitação de agendamento com carinho. Em breve entraremos em contato para confirmar o melhor horário para você."
      );

      form.reset();
    } catch (error) {
      showMessage(
        "error",
        "Não foi possível enviar sua solicitação no momento. Por favor, confira os dados informados ou tente novamente."
      );
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Solicitar agendamento";
    }
  });
}
