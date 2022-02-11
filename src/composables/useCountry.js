import { reactive } from 'vue';

const useCountry = () => {
  const results = reactive({
    data: [],
    isLoading: false,
    isError: false,
  });

  const getData = async (query) => {
    results.isLoading = true;
    try {
      results.isError = false;
      const response = await fetch(query);
      const json = await response.json();
      if (!response.ok) {
        throw new Error();
      }
      results.data = await json;
    } catch {
      results.isError = true;
    } finally {
      results.isLoading = false;
    }
  };

  return {
    getData,
    results,
  };
};

export default useCountry;
