const handleApiSubmitPost =async (data: FormValues) => {
    // console.log("Form submitted ", data);
    // console.log("Typeof",typeof(data))
    const {url,body} = data;
    const postUrl = url
    console.log("URL",url);
    console.log("Body",body)
    console.log("Typeof Body",typeof(body))
    const bodyData =  body.reduce((obj, item) => ({...obj, [item.key]: item.value}) ,{});
    console.log("Result",bodyData)
       if (!body) {
        const response = JSON.stringify({
          message: "Message Body is not valid!",
          status: 400,
        });
        const json = JSON.parse(response);
        setData(json);
      } else if (!postUrl) {
        const response = JSON.stringify({
          message: "URL is not valid!",
          status: 400,
        });
        const json = JSON.parse(response);
        setData(json);
      } else {
        const response = await fetch(postUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accesss-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(bodyData),
        });
        const a: any = await response.json();
        setData(a);
      }
  };
