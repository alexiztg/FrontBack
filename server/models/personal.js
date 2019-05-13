module.exports = {
    nuevoUsuario:nuevoUsuario,
    obtenerUsuario:obtenerUsuario,
    obtenerUsuarioActivo:obtenerUsuarioActivo,
    obtenerUsuarioInactivo:obtenerUsuarioInactivo,
    borrarUsuario:borrarUsuario
}

function nuevoUsuario(d) {

  var query = `
      insert into 
      persona (nombre, ap, edad, correo, telefono, activo)
      values 
        (@nombre, @ap, @edad, @correo, @telefono, @activo)
                `

  var inputs = [
    { nombre: "nombre", tipo: sql.VarChar(50) },
    { nombre: "ap", tipo: sql.VarChar(50) },
    { nombre: "edad", tipo: sql.Int },
    { nombre: "correo", tipo: sql.VarChar(50) },
    { nombre: "telefono", tipo: sql.VarChar(50) },
    { nombre: "activo", tipo: sql.Int }
  ]

  return helpers.mssqlQuery('SET', conn, query, inputs, d)
}

function obtenerUsuario() {

  var query = `
  select 
    persona_id,
    nombre,
    nombre + ' ' + ap as nombre_completo,
    edad,
    correo,
    telefono,
    activo
  from 
    persona`
  var inputs = [ ]
  return helpers.mssqlQuery('GET', conn, query, inputs, {})
}

function obtenerUsuarioActivo() {

    var query = `
    select 
      persona_id,
      nombre,
      nombre + ' ' + ap as nombre_completo,
      edad,
      correo,
      telefono,
      activo
    from 
      persona
    where 
      activo=1
      `
    var inputs = [ ]
    return helpers.mssqlQuery('GET', conn, query, inputs, {})
  }
  function obtenerUsuarioInactivo() {

    var query = `
    select 
      persona_id,
      nombre,
      nombre + ' ' + ap as nombre_completo,
      edad,
      correo,
      telefono,
      activo
    from 
      persona
    where 
      activo=0 `
    var inputs = [ ]
    return helpers.mssqlQuery('GET', conn, query, inputs, {})
  }
  
  





function borrarUsuario(a) {
    console.log(a,'<-------------');
    
  var query = `
  delete
    from 
        persona
    where
    persona_id = @persona_id
              `

  var inputs = [
    { nombre: "persona_id", tipo: sql.Int }
  ]

  return helpers.mssqlQuery('SET', conn, query, inputs, a)
}



