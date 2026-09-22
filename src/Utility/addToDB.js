const getStoredApps = () => {
  const storedAppsSTR = localStorage.getItem("Installed");

  if (storedAppsSTR) {
    const storedAppsData = JSON.parse(storedAppsSTR);
    return storedAppsData;
  } else {
    return [];
  }
};

const addStoredDB = (id) => {
  const storedAppsData = getStoredApps();

  if (storedAppsData.includes(id)) {
    alert("Data already exist");
  } else {
    storedAppsData.push(id);
    const data = JSON.stringify(storedAppsData);
    localStorage.setItem("Installed", data);
  }
};

export { addStoredDB, getStoredApps };
