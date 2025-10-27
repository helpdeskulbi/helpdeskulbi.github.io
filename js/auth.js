document
    .getElementById("loginForm")
    .addEventListener("submit", async function(event) {
        event.preventDefault(); // Mencegah reload halaman

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const loginData = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch(
                "https://ruangsehat-be.ulbi.ac.id/api/public/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginData),
                }
            );

            const result = await response.json();

            if (response.ok) {
                // Login berhasil
                alert("Login berhasil!");
                console.log("Token atau data user:", result);
                localStorage.setItem("token", result.data.token);
                // Biasanya di sini kamu redirect ke halaman dashboard
                // window.location.href = '/dashboard.html';
            } else {
                // Login gagal
                alert(
                    "Login gagal: " + (result.message || "Email atau password salah")
                );
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan jaringan. Coba lagi nanti.");
        }
    });

document
    .getElementById("registerform")
    .addEventListener("submit", async function(event) {
        event.preventDefault();

        const npm = document.getElementById("npm").value;

        try {
            const response = await fetch(
                `https://ruangsehat-be.ulbi.ac.id/api/public/mhs/sinkron?nim=${npm}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const result = await response.json();

            if (response.ok) {
                alert("berhasil register");
                window.location.href = "/dashboard.html";
            } else {
                console.error("gagal register");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });