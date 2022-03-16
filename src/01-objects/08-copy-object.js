const copyObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const emp1 = {
  name: "Nirav",
  address: {
    street: "Some random",
    flat: 101,
    pincode: 401220,
  },
};

const emp2 = copyObject(emp1);
