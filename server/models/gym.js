module.exports = {
    nuevoUsuario:nuevoUsuario,
    obtenerUsuario:obtenerUsuario,
    borrarUsuario:borrarUsuario
}

function nuevoUsuario(d) {

  var query = `
      insert into 
        usuarios_gym (nombre, ap, direccion, interior, estado, celular)
      values 
        (@nombre, @apellido, @direccion, @interior, @estado, @celular)
                `

  var inputs = [
    { nombre: "nombre", tipo: sql.VarChar(50) },
    { nombre: "apellido", tipo: sql.VarChar(50) },
    { nombre: "direccion", tipo: sql.VarChar(50) },
    { nombre: "interior", tipo: sql.Int },
    { nombre: "estado", tipo: sql.VarChar(50) },
    { nombre: "celular", tipo: sql.VarChar(10) }
  ]

  return helpers.mssqlQuery('SET', conn, query, inputs, d)
}

function obtenerUsuario() {

  var query = `
  select 
    usuarios_gym_id,
    nombre + ' ' + ap as nombre_completo,
    direccion,
    interior,
    estado,
    celular
  from 
    usuarios_gym`

  var inputs = [ ]

  return helpers.mssqlQuery('GET', conn, query, inputs, {})
 
}

function borrarUsuario(a) {

  var query = `
  delete
    from 
        usuarios_gym
    where
    usuarios_gym_id = @usuarios_gym_id
              `

  var inputs = [
    { nombre: "usuarios_gym_id", tipo: sql.Int }
  ]

  return helpers.mssqlQuery('SET', conn, query, inputs, a)
}



