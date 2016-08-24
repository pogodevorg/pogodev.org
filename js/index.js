function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function()
  {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success)
        success(JSON.parse(xhr.responseText));
      } else {
        if (error)
        error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}

function setStatuses(data) {
  go = document.querySelector('.js-go-status');
  if (data.go_online) {
    go.textContent = 'Online';
    go.classList.add('status-online');
    go.classList.remove('status-offline');
  } else {
    go.textContent = 'Offline';
    go.classList.add('status-offline');
    go.classList.remove('status-online');
  }
  ptc = document.querySelector('.js-ptc-status');
  if (data.ptc_online) {
    ptc.textContent = 'Online';
    ptc.classList.add('status-online');
    ptc.classList.remove('status-offline');
  } else {
    ptc.textContent = 'Offline';
    ptc.classList.add('status-offline');
    ptc.classList.remove('status-online');
  }
}

function updateStatuses() {
  loadJSON("https://go.jooas.com/status",
    setStatuses
  );
}

document.addEventListener('DOMContentLoaded', updateStatuses)
