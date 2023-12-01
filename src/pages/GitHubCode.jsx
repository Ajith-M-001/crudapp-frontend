const GitHubCode = () => {
  return (
    <div className="flex justify-center mt-24 h-screen flex-col">
      <p className="text-2xl font-bold mb-4">GitHub Repositories</p>
      <div className="text-center">
        <div className="mb-4">
          <p className="mb-2 font-semibold">crudapp-frontend :</p>
          <a
            href="https://github.com/Ajith-M-001/crudapp-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://github.com/Ajith-M-001/crudapp-frontend
          </a>
        </div>
        <div>
          <p className="mb-2 font-semibold">Crudapp_backend :</p>
          <a
            href="https://github.com/Ajith-M-001/Crudapp_backend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://github.com/Ajith-M-001/Crudapp_backend
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubCode;
