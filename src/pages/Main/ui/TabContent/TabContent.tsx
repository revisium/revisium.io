import { Flex, TabsContent, TabsList, TabsRoot, TabsTrigger, Text } from '@chakra-ui/react'
import { IconCopy } from 'src/shared/ui/icons'

export const TabContent = () => {
  return (
    <TabsRoot
      w="100%"
      fitted
      defaultValue="Docker"
      variant="plain"
      border="1px solid"
      borderColor="gray.2"
      borderRadius="16px"
      padding="8px"
    >
      <TabsList
        bgColor="#FFFFFF"
        p={0}
        gap="8px"
        fontSize={{ base: '13px', md: '16px' }}
        fontStyle={{ base: 'normal' }}
        fontWeight={{ base: '400' }}
        lineHeight={{ base: '17px', md: '21px' }}
        color="#000000"
      >
        <TabsTrigger
          value="Docker"
          border="2px solid black"
          borderRadius="8px"
          p="6px 12px"
          _selected={{ bg: '#000000', color: '#FFFFFF' }}
        >
          Docker
        </TabsTrigger>
        <TabsTrigger
          value="Compose"
          border="2px solid black"
          borderRadius="8px"
          p="6px 12px"
          _selected={{ bg: '#000000', color: '#FFFFFF' }}
        >
          Docker Compose
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Docker">
        <Flex direction="column" gap="16px">
          <Text fontSize="15px" fontStyle="normal" fontWeight={700} lineHeight="normal">
            Run Revisium in a single container
          </Text>
          <Text fontSize="13px" fontStyle="normal" fontWeight={400} lineHeight="normal" as="span">
            <Text as="span" color="#5E75EA">
              docker{' '}
            </Text>
            run -d{' '}
            <Text as="span" color="#EE6D50">
              \
            </Text>
            <br />
            &nbsp; --name revisium{' '}
            <Text as="span" color="#EE6D50">
              \
            </Text>{' '}
            <br />
            &nbsp; --env DATABASE_URL
            <Text as="span" color="#EE6D50">
              =
            </Text>
            <Text as="span" color="#FEA554">
              "postgresql:
              <br /> //user:pass@host:5432/db"{' '}
              <Text as="span" color="#EE6D50">
                {' '}
                \
              </Text>{' '}
            </Text>
            <br />
            &nbsp; -p{' '}
            <Text as="span" color="#EE6D50">
              8080
            </Text>
            :8080
            <Text as="span" color="#EE6D50">
              {' '}
              \
            </Text>{' '}
            <br />
            &nbsp; revisium/revisium:v0.10.0
          </Text>
          <Flex borderRadius="8px" p="6px" justify="flex-end">
            <IconCopy />
          </Flex>
        </Flex>
      </TabsContent>
      <TabsContent value="Compose">
        <Flex direction="column" gap="16px">
          <Text fontSize="15px" fontStyle="normal" fontWeight={700} lineHeight="normal">
            Use Docker Compose for a full stack (app + database)
          </Text>
          <Text fontSize="13px" fontStyle="normal" fontWeight={400} lineHeight="normal">
            version: '3.8'
            <br /> services:
            <br />
            &nbsp; revisium:
            <br />
            &nbsp;&nbsp; &nbsp;image: revisium/revisium:v0.10.0
            <br />
            &nbsp;&nbsp; &nbsp;ports: - "8080:8080" <br />
            &nbsp;&nbsp; &nbsp;environment:
            <br />
            &nbsp;&nbsp;&nbsp; &nbsp; DATABASE_URL: "postgresql://user:pass@db:5432/revisium"
            <br />
            &nbsp;&nbsp;&nbsp; &nbsp; depends_on: <br />
            &nbsp; &nbsp; &nbsp; &nbsp; - db
            <br />
            &nbsp; db:
            <br />
            &nbsp; &nbsp; image: postgres:15
            <br />
            &nbsp; &nbsp; environment:
            <br />
            &nbsp; &nbsp; &nbsp; POSTGRES_USER: user
            <br />
            &nbsp; &nbsp; &nbsp; POSTGRES_PASSWORD: pass
            <br />
            &nbsp; &nbsp; &nbsp; POSTGRES_DB: revisium
          </Text>
          <Flex borderRadius="8px" p="6px" justify="flex-end">
            <IconCopy />
          </Flex>
        </Flex>
      </TabsContent>
    </TabsRoot>
  )
}
