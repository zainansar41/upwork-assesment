import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export function ComponentShowcasePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Component showcase</h1>
        <p className="text-muted-foreground">
          Spot-check of shadcn primitives: buttons, badges, card, dropdown,
          form fields, separator, and navigation menu.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Card</h2>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Card content with muted body text.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Dropdown menu</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Form</h2>
        <div className="grid max-w-sm gap-2">
          <Label htmlFor="demo-email">Email</Label>
          <Input
            id="demo-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Navigation menu (sample)</h2>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-2 md:w-[280px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className={cn(
                          "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                          "hover:bg-accent hover:text-accent-foreground",
                          "focus:bg-accent focus:text-accent-foreground",
                        )}
                        href="https://ui.shadcn.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="text-sm font-medium leading-none">
                          shadcn/ui
                        </div>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          Components you can copy into your apps.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Reference
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
    </div>
  )
}
