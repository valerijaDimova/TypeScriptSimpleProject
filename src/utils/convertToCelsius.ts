const convertToCelsius = (value: number, type: string) => {
    if(type === 'K'){
        return (value - 273.15).toFixed()
    }else if(type === 'F'){
        return ((value - 32)/1.8).toFixed()
    }else {
        return value
    }
  };
  
  export default convertToCelsius;