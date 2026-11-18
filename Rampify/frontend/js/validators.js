/* ===== validators.js — devuelven '' si es válido o el mensaje de error ===== */
Rampify.validators = (() => {
  const { RULES } = Rampify.CONFIG, M = Rampify.MESSAGES;
  return {
    correo(v) {
      if (!v) return M.required;
      return v.length <= RULES.EMAIL_MAX && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : M.emailInvalid;
    },
    contrasenaLogin(v) {
      if (!v) return M.required;
      return v.length < RULES.PASSWORD_MIN || v.length > RULES.PASSWORD_MAX ? M.passwordLength : '';
    },
    contrasenaNueva(v) {
      if (!v) return M.required;
      const ok = v.length >= RULES.PASSWORD_MIN && v.length <= RULES.PASSWORD_MAX && /[A-Z]/.test(v) && /[a-z]/.test(v) && /\d/.test(v);
      return ok ? '' : M.passwordRules;
    },
    nombre(v) {
      if (!v) return M.required;
      return v.length >= RULES.NAME_MIN && v.length <= RULES.NAME_MAX && /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$/.test(v) ? '' : M.nameInvalid;
    },
    aviso(checked) { return checked ? '' : M.privacyRequired; },
    codigo(v) {
      if (!v) return M.required;
      return new RegExp(`^\\d{${RULES.CODE_LENGTH}}$`).test(v) ? '' : M.codeFormat;
    },
  };
})();