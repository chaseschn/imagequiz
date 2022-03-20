import flowers from '../temp_data_repository/flowers';
import data from '../temp_data_repository/data';
let dataService = {
      customers: [],
      getFlowers: () => {
            return flowers;
      },
      getQuiz: (name) => {
          let quiz = data.find(x => x.name.toLowerCase() === name.toLowerCase());
          return quiz;
      }
}

export default dataService;
