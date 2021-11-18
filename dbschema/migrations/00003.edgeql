CREATE MIGRATION m1zhtdrm6wk6gg33wbdicd3ibngf5wjle76rtdqah6jtqwrbwnutga
    ONTO m1rqovd64wnjq3z5jwcvgvc5rruh2towuklfuvrghqs25xsrw2ks6a
{
  ALTER TYPE default::Hero {
      DROP PROPERTY number_of_movies;
  };
  ALTER TYPE default::Movie {
      CREATE REQUIRED PROPERTY release_year -> std::int64 {
          SET REQUIRED USING (0);
      };
      ALTER PROPERTY title {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
