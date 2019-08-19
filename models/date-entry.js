module.exports = function(sequelize, DataTypes) {
    let DateEntry = sequelize.define("DateEntry", {
        ticker: DataTypes.STRING,
        ticker: DataTypes.STRING,
        price_usd: DataTypes.DOUBLE,
        market_cap_usd: DataTypes.DOUBLE,
        volume_usd: DataTypes.DOUBLE,
        overall_score: DataTypes.DOUBLE,
        fundamental: DataTypes.DOUBLE,
        technical: DataTypes.DOUBLE,
        news_sentiment: DataTypes.DOUBLE,
        news_volume: DataTypes.DOUBLE,
        twitter_sentiment: DataTypes.DOUBLE,
        twitter_volume: DataTypes.DOUBLE,
        reddit_sentiment: DataTypes.DOUBLE,
        reddit_volume: DataTypes.DOUBLE,
        buzz: DataTypes.DOUBLE,
        buzz_raw: DataTypes.DOUBLE
    });
  
    DateEntry.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      DateEntry.belongsTo(models.Crypto, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return DateEntry;
  };
  