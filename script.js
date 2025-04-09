document.addEventListener("DOMContentLoaded", function () {
  // Initial state and receivers
  const receivers = [
    { id: "Receiver1", connected: true },
    { id: "Receiver2", connected: false },
    { id: "Receiver3", connected: true },
  ];
  let selectedReceiver = receivers[0].id;
  let message = "";
  let volume = 50;
  let brightness = 75;

  // Elements
  const receiverSelect = document.getElementById("receiverSelect");
  const receiverStatus = document.getElementById("receiverStatus");

  // Populate receiver dropdown
  receivers.forEach((receiver) => {
    const option = document.createElement("option");
    option.value = receiver.id;
    option.textContent =
      receiver.id + (receiver.connected ? " (Connected)" : " (Disconnected)");
    receiverSelect.appendChild(option);
  });
  receiverSelect.value = selectedReceiver;
  updateReceiverStatus();

  receiverSelect.addEventListener("change", function () {
    selectedReceiver = this.value;
    updateReceiverStatus();
  });

  function updateReceiverStatus() {
    const receiver = receivers.find((r) => r.id === selectedReceiver);
    if (receiver) {
      receiverStatus.textContent =
        "Status: " + (receiver.connected ? "Connected" : "Disconnected");
      receiverStatus.className = receiver.connected
        ? "status-connected"
        : "status-disconnected";
    }
  }

  // Toast functionality
  function showToast(title, description) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<strong>${title}</strong><p>${description}</p>`;
    document.getElementById("toastContainer").appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // Button event handlers
  document.getElementById("openTabsBtn").addEventListener("click", function () {
    showToast("Tabs Opened", "3 new tabs have been opened");
  });

  // Message dialog
  const messageDialog = document.getElementById("messageDialog");
  const messageInput = document.getElementById("messageInput");
  document.getElementById("openMessageBtn").addEventListener("click", function () {
    messageDialog.style.display = "block";
  });
  document.getElementById("cancelMessageBtn").addEventListener("click", function () {
    messageDialog.style.display = "none";
    messageInput.value = "";
  });
  document.getElementById("sendMessageBtn").addEventListener("click", function () {
    message = messageInput.value;
    console.log(`Sending message to ${selectedReceiver}: ${message}`);
    showToast("Message Sent", `Message sent to ${selectedReceiver}`);
    messageDialog.style.display = "none";
    messageInput.value = "";
  });

  // Color Inversion
  document.getElementById("colorInvertBtn").addEventListener("click", function () {
    console.log(`Toggling color inversion on ${selectedReceiver}`);
    showToast("Color Inversion Toggled", `Color inversion toggled on ${selectedReceiver}`);
  });

  // Open History
  document.getElementById("openHistoryBtn").addEventListener("click", function () {
    console.log(`Opening history for ${selectedReceiver}`);
    showToast("History Opened", `History opened for ${selectedReceiver}`);
  });

  // Lock Device
  document.getElementById("lockDeviceBtn").addEventListener("click", function () {
    console.log(`Locking device ${selectedReceiver}`);
    showToast("Device Locked", `${selectedReceiver} has been locked`);
  });

  // Volume control dialog
  const volumeDialog = document.getElementById("volumeDialog");
  const volumeSlider = document.getElementById("volumeSlider");
  const volumeValue = document.getElementById("volumeValue");
  document.getElementById("volumeControlBtn").addEventListener("click", function () {
    volumeDialog.style.display = "block";
  });
  volumeSlider.addEventListener("input", function () {
    volume = parseInt(this.value);
    volumeValue.textContent = volume + "%";
  });
  document.getElementById("cancelVolumeBtn").addEventListener("click", function () {
    volumeDialog.style.display = "none";
  });
  document.getElementById("changeVolumeBtn").addEventListener("click", function () {
    console.log(`Setting volume on ${selectedReceiver} to ${volume}%`);
    showToast("Volume Changed", `Volume set to ${volume}% on ${selectedReceiver}`);
    volumeDialog.style.display = "none";
  });

  // Brightness control dialog
  const brightnessDialog = document.getElementById("brightnessDialog");
  const brightnessSlider = document.getElementById("brightnessSlider");
  const brightnessValue = document.getElementById("brightnessValue");
  document.getElementById("brightnessControlBtn").addEventListener("click", function () {
    brightnessDialog.style.display = "block";
  });
  brightnessSlider.addEventListener("input", function () {
    brightness = parseInt(this.value);
    brightnessValue.textContent = brightness + "%";
  });
  document.getElementById("cancelBrightnessBtn").addEventListener("click", function () {
    brightnessDialog.style.display = "none";
  });
  document.getElementById("changeBrightnessBtn").addEventListener("click", function () {
    console.log(`Setting brightness on ${selectedReceiver} to ${brightness}%`);
    showToast("Brightness Changed", `Brightness set to ${brightness}% on ${selectedReceiver}`);
    brightnessDialog.style.display = "none";
  });

  // Mouse control navigation
  document.getElementById("mouseControlBtn").addEventListener("click", function () {
    window.location.href = "mouse.html";
  });
});
