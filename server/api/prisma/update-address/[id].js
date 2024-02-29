import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const address = await prisma.addresses.update({
    where: { id: Number(event.context.params.id) },
    data: {
      name: body.name,
      address: body.address,
      zipcode: code.zipCode,
      city: body.city,
      country: body.country,
    }
  });

  return address;
});