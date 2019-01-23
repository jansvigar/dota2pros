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

/**
 * searchArray function from https://codereview.stackexchange.com/questions/197345/js-code-that-search-through-every-property-in-a-nested-object
 */
export const searchArray = (array, keyword) => {
  const regExp = new RegExp(keyword, "gi");
  const check = obj => {
    if (obj !== null && typeof obj === "object") {
      return Object.values(obj).some(check);
    }
    if (Array.isArray(obj)) {
      return obj.some(check);
    }
    return (
      (typeof obj === "string" || typeof obj === "number") && regExp.test(obj)
    );
  };
  return array.filter(check);
};
