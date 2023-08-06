function apply_relations(sequelize) {
  /*
  // Save the models into variables
  const { instrument, orchestra } = sequelize.models;
  // Declare relations on the variables (models)
  orchestra.hasMany(instrument);
  instrument.belongsTo(orchestra);
  */
  const { user, post } = sequelize.models;
  user.hasMany(post);
}

module.exports = { apply_relations };
