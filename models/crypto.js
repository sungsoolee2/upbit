module.exports = function(sequelize, DataTypes) {
    let Crypto = sequelize.define("Crypto", {
      // The name of the ticker
      name: DataTypes.STRING
    });
  
    Crypto.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Crypto.hasMany(models.DateEntry, {
        onDelete: "cascade"
      });
    };
  
    return Crypto;
  };
  