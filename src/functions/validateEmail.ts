export function validateEmail(email: string): string {
  email = email.trim();

  if (!email) return "Erro: o email está vazio.";

  // Verifica se há o símbolo '@'
  if (!email.includes("@")) return "Erro: o símbolo '@' não está presente";

  const [localPart, domainPart] = email.split("@");

  // Parte antes do @
  if (!localPart) return "Erro: deve haver um nome antes do '@'.";

  // Parte depois do @
  if (!domainPart) return "Erro: ausencia de domínio após o '@' (ex: gmail.com).";

  // Verifica se o domínio contém ponto
  if (!domainPart.includes("."))
    return "Erro: domínio sem ponto (ex: gmail.com).";

  // Verifica se termina com uma extensão válida (ex: .com, .org, .br)
  const domainExtension = domainPart.split(".").pop();
  if (!domainExtension || domainExtension.length < 2)
    return "Erro: extensão inválida. Use .com, .br, .org, entre outras.";

  // Verifica caracteres inválidos
  const invalidCharsRegex = /[^a-zA-Z0-9@._%+-]/;
  if (invalidCharsRegex.test(email))
    return "Erro: há caracteres inválidos. Use apenas letras, números e os símbolos ._%+-";

  // Regex final (mais rigoroso)
  const fullRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!fullRegex.test(email))
    return "Erro: o email não tem um formato correto (ex: nome@dominio.com).";

  return "";
}
