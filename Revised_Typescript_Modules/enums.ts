/**
 * Enums in TypeScript are a way to define a set of named constants. They can be used to represent a collection of related values, such as days of the week, colors, or status codes. 
 * Enums can be numeric or string-based, and they provide a way to give more meaningful names to these values, improving code readability and maintainability.
 * 1. Numeric Enums:
 */
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up); // Output: 0
console.log(Direction.Down); // Output: 1
console.log(Direction.Left); // Output: 2
console.log(Direction.Right); // Output: 3

/**
 * 2. String Enums:
 * String enums allow you to assign string values to the enum members. This can be useful when you want to have more descriptive values for your enums.
 */
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
console.log(Color.Red); // Output: "RED"
console.log(Color.Green); // Output: "GREEN"
console.log(Color.Blue); // Output: "BLUE"

/**
 * 3. Heterogeneous Enums:
 * TypeScript also allows you to create heterogeneous enums, which can contain both numeric and string values. However, this is generally not recommended as it can lead to confusion.
 * Here's an example of a heterogeneous enum:
 */
enum MixedEnum {    
    No = 0,
    Yes = "YES"
}
console.log(MixedEnum.No); // Output: 0
console.log(MixedEnum.Yes); // Output: "YES"

/**
 * 4. Enum Member Types:
 * Each member of an enum has a type that is the same as the enum itself. This means that you can use the enum type to declare variables that can only take on the values defined in the enum.
 */
let direction: Direction = Direction.Up;
console.log(direction); // Output: 0    

/**
 * 5. Enum Computed and Constant Members:
 * Enums can have both constant and computed members. Constant members are those that are initialized with a constant value, while computed members are those that are initialized with an expression that is evaluated at runtime.
 * Here's an example of an enum with both constant and computed members:
 */
enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = "123".length
}
console.log(FileAccess.None); // Output: 0
console.log(FileAccess.Read); // Output: 2
console.log(FileAccess.Write); // Output: 4
console.log(FileAccess.ReadWrite); // Output: 6
console.log(FileAccess.G); // Output: 3     

/**
 * 6. Reverse Mapping:
 * TypeScript provides reverse mapping for numeric enums, which means that you can access the name of an enum member using its value. However, this feature is not available for string enums.
 * Here's an example of reverse mapping with a numeric enum:
 */
enum Status {
    Active = 1,
    Inactive,
    Pending
}
console.log(Status.Active); // Output: 1
console.log(Status[1]); // Output: "Active"
console.log(Status.Inactive); // Output: 2
console.log(Status[2]); // Output: "Inactive"
console.log(Status.Pending); // Output: 3
console.log(Status[3]); // Output: "Pending"    

/**
 * 7. Enum Const Assertions:
 * TypeScript allows you to use const assertions with enums to create a more optimized version of the enum. When you use a const assertion, the enum members are treated as literal types, which can lead to better performance and smaller code size.
 * Here's an example of using const assertions with enums:
 */
const enum LogLevel {   
    Error,
    Warning,
    Info
}
console.log(LogLevel.Error); // Output: 0
console.log(LogLevel.Warning); // Output: 1
console.log(LogLevel.Info); // Output: 2    

/**
 * 8. Enum Namespaces:
 * TypeScript allows you to use namespaces to group related enums together. This can help to organize your code and prevent naming conflicts.   
 * Here's an example of using namespaces with enums:
 */
namespace Shapes {  
    export enum ShapeType {
        Circle,
        Square,
        Triangle
    }   
    export function getShapeName(shape: ShapeType): string {
        switch (shape) {
            case ShapeType.Circle:
                return "Circle";
            case ShapeType.Square:
                return "Square";
            case ShapeType.Triangle:
                return "Triangle";
            default:
                return "Unknown shape";
        }
    }
}
console.log(Shapes.ShapeType.Circle); // Output: 0
console.log(Shapes.getShapeName(Shapes.ShapeType.Circle)); // Output: "Circle"  

/**
 * Enums in TypeScript are a powerful feature that allows you to define a set of named constants. They can be used to improve code readability and maintainability by giving meaningful names to values. Whether you choose to use numeric enums, string enums, or heterogeneous enums, they can help you organize your code and make it easier to understand.
 */