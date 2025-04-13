exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'uuid',
      primaryKey: true,
      default: pgm.func('gen_random_uuid()'),
    },

    // For reference, Github usernames can have up to 39 characters.
    username: {
      type: 'varchar(30)',
      notNull: true,
      unique: true,
    },

    // Why 254 in length? https://stackoverflow.com/a/1199238
    email: {
      type: 'varchar(254)',
      notNull: true,
      unique: true,
    },

    // Why 60 in length? https://www.npmjs.com/package/bcrypt#hash-info
    password: {
      type: 'varchar(60)',
      notNull: true,
    },

    // Why timestamp with time zone? https://justatheory.com/2012/04/postgres-use-timestamptz/
    created_at: {
      type: 'timestamptz',
      notNull: true,
      default: pgm.func("timezone('UTC', now())"),
    },

    updated_at: {
      type: 'timestamptz',
      notNull: true,
      default: pgm.func("timezone('UTC', now())"),
    },
  })
}

exports.down = false
