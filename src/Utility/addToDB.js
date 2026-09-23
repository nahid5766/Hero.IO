// get item from local storage
const getStoredApps = () => {
  const storedAppsSTR = localStorage.getItem("Installed");

  if (storedAppsSTR) {
    const storedAppsData = JSON.parse(storedAppsSTR);
    return storedAppsData;
  } else {
    return [];
  }
};

// add item local storage
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

// delete item from local storage
const removeFromDB = (id) => {
  const storedApps = getStoredApps();
  const remainingApps = storedApps.filter(
    (storedId) => parseInt(storedId) !== id,
  );
  localStorage.setItem("Installed", JSON.stringify(remainingApps));
};

export { addStoredDB, getStoredApps, removeFromDB };
