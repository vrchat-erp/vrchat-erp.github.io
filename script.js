document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("download-btn").addEventListener("click", function() {
        const webhookUrl = "https://discord.com/api/webhooks/1343006896818487317/Ls2hmq8Fyso3Ys3SlErsgrlA27VRGLtXBb3YuSinfcven2-VOCmNj7oI0EseiH1JGWXD"; 

        const data = {
            username: "Download",
            avatar_url: "https://cdn.discordapp.com/attachments/1339652974347161681/1339661175801253918/photo_2025-02-11_19-42-10.jpg?ex=67af8832&is=67ae36b2&hm=0fd125aeeab7cbce59e205e0accb2ba5c7d4e4ef2607a31adb1b232bba6ae875&",
            content: "A user **VRChat-ERP-Mode.zip** file downloaded! :inbox_tray:"
        };

        fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(response => console.log("Webhook gönderildi!"))
          .catch(error => console.error("Hata oluştu:", error));
    });
});
