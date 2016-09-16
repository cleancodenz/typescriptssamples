Export as close to top-level as possible

Consumers of your module should have as little friction as possible when using things that you export. Adding too many levels of nesting tends to be cumbersome, so think carefully about how you want to structure things.

Exporting a namespace from your module is an example of adding too many layers of nesting. While namespaces sometimes have their uses, they add an extra level of indirection when using modules. This can quickly becomes a pain point for users, and is usually unnecessary.

Static methods on an exported class have a similar problem - the class itself adds a layer of nesting. Unless it increases expressivity or intent in a clearly useful way, consider simply exporting a helper function.

If you’re only exporting a single class or function, use export default

Just as “exporting near the top-level” reduces friction on your module’s consumers, so does introducing a default export. If a module’s primary purpose is to house one specific export, then you should consider exporting it as a default export. This makes both importing and actually using the import a little easier



Do not use namespaces in modules

When first moving to a module-based organization, a common tendency is to wrap exports in an additional layer of namespaces. Modules have their own scope, and only exported declarations are visible from outside the module. With this in mind, namespace provide very little, if any, value when working with modules.

On the organization front, namespaces are handy for grouping together logically-related objects and types in the global scope. For example, in C#, you’re going to find all the collection types in System.Collections. By organizing our types into hierarchical namespaces, we provide a good “discovery” experience for users of those types. Modules, on the other hand, are already present in a file system, necessarily. We have to resolve them by path and filename, so there’s a logical organization scheme for us to use. We can have a /collections/generic/ folder with a list module in it.

Namespaces are important to avoid naming collisions in the global scope. For example, you might have My.Application.Customer.AddForm and My.Application.Order.AddForm – two types with the same name, but a different namespace. This, however, is not an issue with modules. Within a module, there’s no plausible reason to have two objects with the same name. From the consumption side, the consumer of any given module gets to pick the name that they will use to refer to the module, so accidental naming conflicts are impossible.


Red Flags

All of the following are red flags for module structuring. Double-check that you’re not trying to namespace your external modules if any of these apply to your files:

A file whose only top-level declaration is export namespace Foo { ... } (remove Foo and move everything ‘up’ a level)
A file that has a single export class or export function (consider using export default)
Multiple files that have the same export namespace Foo { at top-level (don’t think that these are going to combine into one Foo!)
