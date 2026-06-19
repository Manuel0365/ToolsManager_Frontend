-- Crear la tabla Usuarios
CREATE TABLE Usuarios (
    id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo_usuario TEXT NOT NULL,
    contrasena TEXT NOT NULL
);

-- Crear la tabla Categorías
CREATE TABLE Categorias (
    id_categoria INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL UNIQUE,
    descripcion TEXT
);

-- Crear la tabla Productos
CREATE TABLE Productos (
    id_producto INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    codigo_barras TEXT UNIQUE,
    sku TEXT,
    unidad_venta TEXT,
    id_categoria INTEGER,
    marca TEXT,
    descripcion TEXT,
    existencias INTEGER,
    cantidad_minima INTEGER,
    precio_publico REAL,
    precio_compra REAL,
    iva REAL,
    ieps REAL,
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

-- Crear la tabla Proveedores
CREATE TABLE Proveedores (
    id_proveedor INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    contacto TEXT,
    telefono TEXT,
    email TEXT UNIQUE
);

-- Crear la tabla Clientes
CREATE TABLE Clientes (
    id_cliente INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT,
    telefono TEXT,
    email TEXT UNIQUE,
    comentarios TEXT
);

-- Crear la tabla Ventas
CREATE TABLE Ventas (
    id_venta INTEGER PRIMARY KEY AUTOINCREMENT,
    id_cliente INTEGER,
    fecha TEXT NOT NULL,
    total REAL NOT NULL,
    metodo_pago TEXT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

-- Crear la tabla DetalleVentas
CREATE TABLE DetalleVentas (
    id_detalle INTEGER PRIMARY KEY AUTOINCREMENT,
    id_venta INTEGER,
    id_producto INTEGER,
    cantidad INTEGER NOT NULL,
    precio_unitario REAL NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (id_venta) REFERENCES Ventas(id_venta),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

-- Crear la tabla Compras
CREATE TABLE Compras (
    id_compra INTEGER PRIMARY KEY AUTOINCREMENT,
    id_proveedor INTEGER,
    fecha TEXT NOT NULL,
    total REAL NOT NULL,
    estado TEXT NOT NULL,
    FOREIGN KEY (id_proveedor) REFERENCES Proveedores(id_proveedor)
);

-- Crear la tabla Caja
CREATE TABLE Caja (
    id_movimiento INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo TEXT NOT NULL, -- 'Ingreso' o 'Egreso'
    monto REAL NOT NULL,
    motivo TEXT,
    fecha TEXT NOT NULL,
    realizado_por TEXT
);


