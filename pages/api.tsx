export type orderDataProps = {
  address: string;
  orderNumber: string;
  orderStatus: string;
};

export const getRequest = (url: string) => {
  return window
    .fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return null;
      }
    })
    .then((data) => {
      if (!data || data.error) {
        console.log("API error:", { data });
        throw new Error("getRequest " + url + " error!");
      } else {
        return data;
      }
    });
};

export const postRequest = (url: string, options: orderDataProps) => {
  return window
    .fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return null;
      }
    })
    .then((data) => {
      if (!data || data.error) {
        console.log("API error:", { data });
        throw new Error("postRequest " + url + " error!");
      } else {
        return data;
      }
    });
};

export const sendOrderDataFromDisplayValue = async (
  displayValue: string,
  orderStatus: string,
) => {
  //spilt first
  let splitArray = displayValue.split(" ");

  let inputObj: orderDataProps = {
    address: "",
    orderNumber: "",
    orderStatus: "",
  };

  inputObj.address = splitArray[0];
  inputObj.orderNumber = splitArray[1];
  inputObj.orderStatus = orderStatus;

  //send to backend

  const data = await postRequest("/dbget/api/orderData", inputObj);

  return data;
};

export const clearOrderData = async () => {
  //send to backend

  const data = await getRequest("/dbget/api/clearData");
  return data;
};
