exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstname: 'chris',
          lastname: 'jannenga',
          email: 'cjannenga312@gmail.com',
          age: '23',
          username: 'cjannenga312',
          password: 'password'
        },
        {
          firstname: 'krystine',
          lastname: 'jannenga',
          email: 'kjannenga1@gmail.com',
          age: '21',
          username: 'kjannenga1',
          password: 'password'
        },
        {
          firstname: 'sage',
          lastname: 'jannenga',
          email: 'sagejannenga@gmail.com',
          age: '0',
          username: 'sagejannenga',
          password: 'password'
        }
      ]);
    });
};
