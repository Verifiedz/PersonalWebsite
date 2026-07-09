FROM node:20-slim
RUN useradd -m -u 1001 claude
RUN npm install -g @anthropic-ai/claude-code
WORKDIR /workspace
USER claude
ENTRYPOINT ["claude"]
