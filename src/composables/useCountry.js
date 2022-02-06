import { reactive } from 'vue';

const useCountry = () => {
  const results = reactive({
    data: [],
    isLoading: false,
    isError: false,
  });

  const getAllCountries = async () => {
    results.isLoading = true;
    try {
      const response = await fetch('https://restcountries.com/v2/all');
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

  getAllCountries();

  return {
    getAllCountries,
    results,
  };
};

export default useCountry;
