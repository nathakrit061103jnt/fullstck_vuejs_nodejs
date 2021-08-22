const getData1 = () => {
  setTimeout(() => {
    console.log("getData1");
  }, 3000);
};

const getData2 = () => {
  setTimeout(() => {
    console.log("getData2");
  }, 5000);
};

const getData3 = () => {
  setTimeout(() => {
    console.log("getData3");
  }, 2000);
};

getData1();
getData2();
getData3();
