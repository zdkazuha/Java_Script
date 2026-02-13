document.querySelector("#UserSearch").addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        const userS = document.querySelector("#UserSearch").value.trim();
        if (!userS) {
            console.alert("Поле логіна порожнє");
            return;
        }

            // const response = await fetch(`/api/users?login=${encodeURIComponent(userS)}`);
            const response = await fetch(`https://api.github.com/users/${userS}`);
            console.log(`https://api.github.com/users/${userS}`);

            if (!response.ok) {
                console.error("Користувача не знайдено:", response.statusText);
                return;
            }

            const user = await response.json();

            document.querySelector("#userName").textContent = user.name || "Невідомо";
            document.querySelector("#userLogin").textContent = user.login || "Невідомо";
            document.querySelector("#userAvatar").src = user.avatar_url || "./img/images.jpg";
            document.querySelector("#userUrl").textContent = user.url || "Немає";
            document.querySelector("#userBlog").textContent = user.blog || "Немає";
            document.querySelector("#userCity").textContent = user.location || "Невідомо";
            document.querySelector("#userEmail").textContent = user.email || "Невідомо";
            document.querySelector("#userFollowers").textContent = user.followers || "0";
            document.querySelector("#userFollowing").textContent = user.following || "0";
    }
});