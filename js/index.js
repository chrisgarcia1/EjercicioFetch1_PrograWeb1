fetch("https://api.escuelajs.co/api/v1/users")
    .then(response => response.json())
    .then(data => {
        let tabla = "<tr><th>Email</th><th>Password</th><th>Name</th><th>Avatar</th></tr>"

        for (let usuario of data) {
            tabla += `<tr><td>${usuario.email}</td>
                          <td>${usuario.password}</td>
                          <td>${usuario.name}</td>
                          <td><img src="${usuario.avatar}" width='100' height='100'></td></tr>`
        }
        document.getElementById("tblUsers").innerHTML = tabla
    })