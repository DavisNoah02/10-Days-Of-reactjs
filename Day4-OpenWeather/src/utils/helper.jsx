export const formatTemperature = (temp) => {
    return Math.round(temp);
  };
  
  export const getDateString = () => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date().toLocaleDateString(undefined, options);
  };
  