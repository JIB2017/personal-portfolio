import qs from "query-string";

interface BuildQueryParams {
  type: string;
  category: string;
  page: number;
  perPage?: number;
}

export const buildQuery = (params: BuildQueryParams) => {
  const { type, category, page = 1, perPage = 10 } = params;

  // Busco por categoría
  const conditions = [`*[_type=="${type}"`];

  // Si hay una solicitud
  //if (query) conditions.push(`title match "*${query}*"`);

  // Si tengo categorías y no estamos en el filtro de "Todos"
  if (category && category !== "")
    conditions.push(`category == "${category}"`);

  // Pagination limits

  const offset = (page - 1) * perPage;
  const limit = perPage;

  return conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(" && ")})][${offset}...${limit}]`
    : `${conditions[0]}][${offset}...${limit}]`;
};

interface FormUrlParams {
  params: string;
  key?: string;
  value?: string;
  keysToRemove?: string[];
}

export const formUrlQuery = ({ params, key, value, keysToRemove }: FormUrlParams) => {
  const currentUrl = qs.parse(params);

  if (keysToRemove) {
    keysToRemove.forEach((key) => {
      delete currentUrl[key];
    });
  } else {
    if (key && value) {
      currentUrl[key] = value;
    }
  }

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  );
};
