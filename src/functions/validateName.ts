export function validateName(name: string): string {
  name = name.trim();

  if (!name) return "O nome não pode estar vazio.";

  // Permite apenas letras, acentos, espaços, apóstrofos e hífen
  const basicRegex = /^[A-Za-zÀ-ÿ' -]+$/;
  if (!basicRegex.test(name))
    return "Emojis, caracteres especiais e números não são permitidos.";

  // Evita mais de 4 consoantes seguidas
  if (/[bcdfghjklmnpqrstvwxyz]{4,}/i.test(name))
    return "Mais de 4 consoantes seguidas não são permitidas.";

  // Mínimo de 3 letras
  if (name.length < 3) return "O nome deve ter pelo menos 3 caracteres.";

  return "";
}