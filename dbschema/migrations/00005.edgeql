CREATE MIGRATION m1ey23qpqfmhlesrsre32pnowgcpbktljxyvv3qvtauqxwtt74qx3a
    ONTO m1ezu2svkpvwbccwny6cuygkbblyxktgxvxm2knm5hzoqzh6tc623a
{
  ALTER TYPE default::Movie {
      ALTER PROPERTY title {
          DROP CONSTRAINT std::exclusive;
      };
  };
};
