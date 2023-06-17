function getEle(id) {
  return document.getElementById(id);
}

const handleData = async (typeName) => {
  try {
    const result = await callData();
    const filterData = result.tabPanes.find(obj.type === typeName);
    let content = "";
    filterData.forEach((element) => {
      content += `
          <div class="row">
              <div class="col-md-3 my-3">
                  <img src="${element.imgSrc_png}" alt="" />
                  <button class="btn btn-success">Thử</button>
               </div>
          </div>;
      `;
    });
  } catch (error) {
    console.log(error);
  }
};

getEle("shirt").onclick = function () {};
