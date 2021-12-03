CREATE MIGRATION m1ezu2svkpvwbccwny6cuygkbblyxktgxvxm2knm5hzoqzh6tc623a
    ONTO m1zhtdrm6wk6gg33wbdicd3ibngf5wjle76rtdqah6jtqwrbwnutga
{
  ALTER TYPE default::Hero {
      CREATE LINK movies := (.<characters[IS default::Movie]);
  };
  ALTER TYPE default::Movie {
      ALTER PROPERTY release_year {
          RESET OPTIONALITY;
      };
  };
};
