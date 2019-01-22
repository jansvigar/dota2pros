import countries from "./data/countries.json";

export const formatDate = date_str => {
  if (date_str) {
    const date = new Date(date_str);
    const formattedDate = `${date.getMonth() +
      1}/${date.getDate()}/${date.getFullYear()} ${(
      "0" + date.getHours()
    ).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;
    return formattedDate;
  }
};

export const getPlayerRole = roleNumber => {
  const roles = {
    1: "Core",
    2: "Support"
  };
  if (roles.hasOwnProperty(roleNumber)) {
    return roles[roleNumber];
  }

  return "Unknown";
};

export const getPlayerCountry = countryCode => {
  if (countryCode) {
    const uppercaseCountryCode = countryCode.toUpperCase();
    if (countries.hasOwnProperty(uppercaseCountryCode)) {
      return countries[uppercaseCountryCode];
    }
  }
  return "Unknown";
};
