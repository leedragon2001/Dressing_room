function getEle(id) {
  return document.getElementById(id);
}

const filterFunction = () => {
  const elements = document.getElementsByClassName("filter");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", async function () {
      const dataId = elements[i].getAttribute("data-id");
      await renderData(dataId);
    });
  }
};

const renderTitle = async () => {
  try {
    const result = await callData();
    let html = "";
    result.navPills.forEach((e) => {
      html += `
      <li class="nav-item">
        <a class="nav-link filter" data-toggle="pill" data-id="${e.type}" href="#show">${e.showName}</a>
      </li>
      `;
    });
    getEle("title").innerHTML = html;
    filterFunction();
  } catch (error) {
    console.log(error);
  }
};
renderTitle();

const showTrialOnModel = async (id) => {
  try {
    const result = await callData();
    const data = result.tabPanes.find((obj) => obj.id === id);
    const baseTitle = result.navPills.map((element) => element.type);
    const indexItem = baseTitle.findIndex((element) => element === data.type);
    if (
      baseTitle[indexItem] === "topclothes" ||
      baseTitle[indexItem] === "botclothes"
    ) {
      getEle(
        baseTitle[indexItem]
      ).innerHTML = `<img src="${data.imgSrc_png}" alt="" width="250">`;
    } else {
      getEle(
        baseTitle[indexItem]
      ).style.background = `url("${data.imgSrc_png}")`;
    }
  } catch (error) {
    console.log(error);
  }
};

const trial = async () => {
  const elements = document.getElementsByClassName("trial");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", async function () {
      const dataId = elements[i].getAttribute("data-id");
      await showTrialOnModel(dataId);
    });
  }
};

const renderData = async (typeName) => {
  try {
    const result = await callData();
    const filterData = result.tabPanes.filter((obj) => obj.type === typeName);
    let content = "";
    filterData.forEach((element) => {
      content += `
          
              <div class="col-3 my-3 item">
                  <img src="${element.imgSrc_png}" alt=""/>
                  <button class="btn btn-success trial" data-id="${element.id}">Thử</button>
               </div>
          
      `;
    });
    getEle("show").innerHTML = content;
    trial();
  } catch (error) {
    console.log(error);
  }
};
