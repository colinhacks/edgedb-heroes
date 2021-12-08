using extension graphql;


module default {

  abstract type Person {
    required property name -> str { constraint exclusive; };
  }

  type Hero extending Person {
    property secret_identity -> str;
    multi link villains := .<nemesis[IS Villain];
    link movies := .<characters[is Movie];
  }

  type Villain extending Person {
    link nemesis -> Hero;
  }

  type Movie {
    required property title -> str;
    property release_year -> int64;
    multi link characters -> Person;
  }

}