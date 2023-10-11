class Human
{
    // Properties for Human
    public string Name;
    public int Strength;
    public int Intelligence;
    public int Dexterity;
    public int Health;
    // Add a constructor that takes a value to set Name, and set the remaining fields to default values



    // Add a constructor to assign custom values to all fields

    public Human(string name, int str, int i, int dex, int hel)
    {
        Name = name;
        Strength = str;
        Intelligence = i;
        Dexterity = dex;
        Health = hel;
    }

    /*  public Human(string name){
         Name = name;
         Strength = 3;
         Intelligence = 3;
         Dexterity = 3;
         Health = 100;
     } */
    // Build Attack method
    public int Attack(Human target)
    {
        target.Health = target.Health - 3 * target.Strength;
        return target.Health;
    }
}

class Program
{

    static void Main()
    {
        Human myHumano = new Human("Jorge", 3, 3, 3, 100);
        Console.WriteLine(myHumano.Name);

        Console.WriteLine("Salud antes del ataque: " + myHumano.Health);
        myHumano.Attack(myHumano);

        Console.WriteLine("Salud después del ataque: " + myHumano.Health);
    }
}