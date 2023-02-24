import { promises } from "fs"
import { PrismaClient } from "@prisma/client"

const readFile = promises.readFile

/**
 * Criando uma instância do prisma
 */
const prisma = new PrismaClient()

/**
 * Tipagens do Typescript
 */
interface Departments {
    name: string;
    email: string;
    phoneNumber: string;
}

interface RelationType {
    relation: string;
    departmentId: number;
}

interface RelationTypeCompany {
    typeRelation: string;
}

interface HowImFactsAware {
    factText: string;      /** Como estou ciente dos fatos **/
}

interface CompanyBranches {
    branchText: string;
}

interface Channels {
    channelName: string;
}

interface Products {
    name: string;
}

async function main() {
    try {
        let dataset = await readFile("./prisma/dataset.json", "utf-8")
        const data = await JSON.parse(dataset)

        /**
         * Deleta os dados da tabela caso exista
         */
        await prisma.department.deleteMany()
        await prisma.relation.deleteMany()
        await prisma.relationType.deleteMany()
        await prisma.factAware.deleteMany()
        await prisma.branch.deleteMany()
        await prisma.channel.deleteMany()
        await prisma.product.deleteMany()


        /**
         * Faz um map no array de departamentos inserindo cada registro do [JSON] no banco de dados de forma automática
         */
        data.departments.map(async ({ name, email, phoneNumber }: Departments) => {
            await prisma.department.create({
                data: {
                    name,
                    email,
                    phoneNumber
                }
            })
        })

        data.type_of_relationship_with_company.map(async ({ typeRelation }: RelationTypeCompany) => {
            await prisma.relation.create({
                data: {
                    typeRelation
                }
            })
        })

        data.report_type.map(async ({ relation, departmentId }: RelationType) => {
            await prisma.relationType.create({
                data: {
                    relation,
                    department: {
                        connect: {
                            id: departmentId
                        }
                    }
                },
            })
        })


        data.how_i_know_facts.map(async ({ factText }: HowImFactsAware) => {
            await prisma.factAware.create({
                data: {
                    factText
                }
            })
        })

        data.company_branches.map(async ({ branchText }: CompanyBranches) => {
            await prisma.branch.create({
                data: {
                    branchText
                }
            })
        })

        data.channels.map(async ({ channelName }: Channels) => {
            await prisma.channel.create({
                data: {
                    channelName
                }
            })
        })

        data.products.map(async ({ name }: Products) => {
            await prisma.product.create({
                data: {
                    name
                }
            })
        })

    } catch (err) {
        console.log(err)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
