# Use an image with the SDK for compilation
FROM microsoft/dotnet:2.2-sdk AS builder
WORKDIR /app

# Get the build file
COPY *.csproj  .
# Optional. Run this first so that it is cached
RUN dotnet restore

# Get the source code inside the image 
COPY . .
RUN dotnet publish --output /out/ --configuration Release

# Create a lightweight image
FROM microsoft/dotnet:2.2-aspnetcore-runtime-alpine
WORKDIR /app
# Copy compiled artifacts from previous image
COPY --from=builder /out .
EXPOSE 80
ENTRYPOINT ["dotnet", "aspnet-core.dll"]
