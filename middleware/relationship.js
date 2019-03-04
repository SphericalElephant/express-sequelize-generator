'use strict';

/**
 * A middleware that attaches a function that can be used to obtain association information for any loaded model.
 *
 * The information contains: source model, target model, association type,
 * fk field and for belongstomany associations fk source, fk target and through model.
 */
module.exports = (models) => {
  return async (req, res, next) => {
    next();
  };
};
