import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type Props = {
  message: string;
  senderEmail: string;
};

export default function EmailTemplate({ message, senderEmail }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>

      <Tailwind>
        <Body className="text-neutral-900">
          <Container className="mx-auto my-8 w-full max-w-[560px]">
            <Section className="rounded-xl border border-neutral-200 bg-white px-6 py-5">
              <Heading className="m-0 text-xl font-semibold">
                New Contact Form Message
              </Heading>

              <Text className="mt-1 text-sm text-neutral-500">
                You received a new message from your portfolio.
              </Text>

              <Hr className="my-4 border-neutral-200" />

              <Section className="rounded-lg px-4 py-3">
                <Text className="m-0 text-xs uppercase tracking-wide text-neutral-500">
                  From
                </Text>
                <Text className="mt-1 text-base font-medium">
                  {senderEmail}
                </Text>
              </Section>

              <Section className="mt-4 rounded-lg px-4 py-3">
                <Text className="m-0 text-xs uppercase tracking-wide text-neutral-500">
                  Message
                </Text>
                <Text className="mt-1 whitespace-pre-wrap leading-6">
                  {message}
                </Text>
              </Section>

              <Hr className="my-6 border-neutral-200" />
              <Text className="m-0 text-xs text-neutral-500">
                Sent automatically from Mike’s portfolio.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
