import { faker } from '@faker-js/faker'

export default (
  n: number,
  include: Record<string, Function> = {},
  exclude: string[] = []
) =>
  Array(n)
    .fill(0)
    .map((_, id) => {
      const firstName = faker.person.firstName()
      const lastName = faker.person.lastName()
      const contact: Record<string, string | number | boolean> = {
        id,
        name: firstName + ' ' + lastName,
        email: faker.internet.exampleEmail({ firstName, lastName }),
      }

      // Exlcude the fields to exclude
      for (let toExclude of exclude)
        delete contact[toExclude as keyof typeof contact]
      for (let toInclude in include)
        contact[toInclude] = include[toInclude](contact)
      return contact
    })
