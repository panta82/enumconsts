class EnumconstsSignals {
  constructor() {
    /** Sent to indicate when a controlling terminal is closed or a parent process exits.*/
    this.SIGHUP = 'SIGHUP';

    /** Sent to indicate when a user wishes to interrupt a process ((Ctrl+C)).*/
    this.SIGINT = 'SIGINT';

    /** Sent to indicate when a user wishes to terminate a process and perform a core dump.*/
    this.SIGQUIT = 'SIGQUIT';

    /** Sent to a process to notify that it has attempted to perform an illegal, malformed, unknown or privileged instruction.*/
    this.SIGILL = 'SIGILL';

    /** Sent to a process when an exception has occurred.*/
    this.SIGTRAP = 'SIGTRAP';

    /** Sent to a process to request that it abort.*/
    this.SIGABRT = 'SIGABRT';

    /** Synonym for SIGABRT*/
    this.SIGIOT = 'SIGIOT';

    /** Sent to a process to notify that it has caused a bus error.*/
    this.SIGBUS = 'SIGBUS';

    /** Sent to a process to notify that it has performed an illegal arithmetic operation.*/
    this.SIGFPE = 'SIGFPE';

    /** Sent to a process to terminate it immediately.*/
    this.SIGKILL = 'SIGKILL';

    /** Sent to a process to identify user-defined conditions.*/
    this.SIGUSR1 = 'SIGUSR1';

    /** Sent to a process to identify user-defined conditions.*/
    this.SIGUSR2 = 'SIGUSR2';

    /** Sent to a process to notify of a segmentation fault.*/
    this.SIGSEGV = 'SIGSEGV';

    /** Sent to a process when it has attempted to write to a disconnected pipe.*/
    this.SIGPIPE = 'SIGPIPE';

    /** Sent to a process when a system timer elapses.*/
    this.SIGALRM = 'SIGALRM';

    /** Sent to a process to request termination.*/
    this.SIGTERM = 'SIGTERM';

    /** Sent to a process when a child process terminates.*/
    this.SIGCHLD = 'SIGCHLD';

    /** Sent to a process to indicate a stack fault on a coprocessor.*/
    this.SIGSTKFLT = 'SIGSTKFLT';

    /** Sent to instruct the operating system to continue a paused process.*/
    this.SIGCONT = 'SIGCONT';

    /** Sent to instruct the operating system to halt a process.*/
    this.SIGSTOP = 'SIGSTOP';

    /** Sent to a process to request it to stop.*/
    this.SIGTSTP = 'SIGTSTP';

    /** Sent to indicate when a user wishes to interrupt a process.*/
    this.SIGBREAK = 'SIGBREAK';

    /** Sent to a process when it reads from the TTY while in the background.*/
    this.SIGTTIN = 'SIGTTIN';

    /** Sent to a process when it writes to the TTY while in the background.*/
    this.SIGTTOU = 'SIGTTOU';

    /** Sent to a process when a socket has urgent data to read.*/
    this.SIGURG = 'SIGURG';

    /** Sent to a process when it has exceeded its limit on CPU usage.*/
    this.SIGXCPU = 'SIGXCPU';

    /** Sent to a process when it grows a file larger than the maximum allowed.*/
    this.SIGXFSZ = 'SIGXFSZ';

    /** Sent to a process when a virtual timer has elapsed.*/
    this.SIGVTALRM = 'SIGVTALRM';

    /** Sent to a process when a system timer has elapsed.*/
    this.SIGPROF = 'SIGPROF';

    /** Sent to a process when the controlling terminal has changed its size.*/
    this.SIGWINCH = 'SIGWINCH';

    /** Sent to a process when I/O is available.*/
    this.SIGIO = 'SIGIO';

    /** Synonym for SIGIO*/
    this.SIGPOLL = 'SIGPOLL';

    /** Sent to a process when a file lock has been lost.*/
    this.SIGLOST = 'SIGLOST';

    /** Sent to a process to notify of a power failure.*/
    this.SIGPWR = 'SIGPWR';

    /** Synonym for SIGPWR*/
    this.SIGINFO = 'SIGINFO';

    /** Sent to a process to notify of a bad argument.*/
    this.SIGSYS = 'SIGSYS';

    /** Synonym for SIGSYS*/
    this.SIGUNUSED = 'SIGUNUSED';
  }
}

class EnumconstsErrno {
  constructor() {
    /** Indicates that the list of arguments is longer than expected. */
    this.E2BIG = 'E2BIG';

    /** Indicates that the operation did not have sufficient permissions. */
    this.EACCES = 'EACCES';

    /** Indicates that the network address is already in use. */
    this.EADDRINUSE = 'EADDRINUSE';

    /** Indicates that the network address is currently unavailable for use. */
    this.EADDRNOTAVAIL = 'EADDRNOTAVAIL';

    /** Indicates that the network address family is not supported. */
    this.EAFNOSUPPORT = 'EAFNOSUPPORT';

    /** Indicates that there is currently no data available and to try the operation again later. */
    this.EAGAIN = 'EAGAIN';

    /** Indicates that the socket already has a pending connection in progress. */
    this.EALREADY = 'EALREADY';

    /** Indicates that a file descriptor is not valid. */
    this.EBADF = 'EBADF';

    /** Indicates an invalid data message. */
    this.EBADMSG = 'EBADMSG';

    /** Indicates that a device or resource is busy. */
    this.EBUSY = 'EBUSY';

    /** Indicates that an operation was canceled. */
    this.ECANCELED = 'ECANCELED';

    /** Indicates that there are no child processes. */
    this.ECHILD = 'ECHILD';

    /** Indicates that the network connection has been aborted. */
    this.ECONNABORTED = 'ECONNABORTED';

    /** Indicates that the network connection has been refused. */
    this.ECONNREFUSED = 'ECONNREFUSED';

    /** Indicates that the network connection has been reset. */
    this.ECONNRESET = 'ECONNRESET';

    /** Indicates that a resource deadlock has been avoided. */
    this.EDEADLK = 'EDEADLK';

    /** Indicates that a destination address is required. */
    this.EDESTADDRREQ = 'EDESTADDRREQ';

    /** Indicates that an argument is out of the domain of the function. */
    this.EDOM = 'EDOM';

    /** Indicates that the disk quota has been exceeded. */
    this.EDQUOT = 'EDQUOT';

    /** Indicates that the file already exists. */
    this.EEXIST = 'EEXIST';

    /** Indicates an invalid pointer address. */
    this.EFAULT = 'EFAULT';

    /** Indicates that the file is too large. */
    this.EFBIG = 'EFBIG';

    /** Indicates that the host is unreachable. */
    this.EHOSTUNREACH = 'EHOSTUNREACH';

    /** Indicates that the identifier has been removed. */
    this.EIDRM = 'EIDRM';

    /** Indicates an illegal byte sequence. */
    this.EILSEQ = 'EILSEQ';

    /** Indicates that an operation is already in progress. */
    this.EINPROGRESS = 'EINPROGRESS';

    /** Indicates that a function call was interrupted. */
    this.EINTR = 'EINTR';

    /** Indicates that an invalid argument was provided. */
    this.EINVAL = 'EINVAL';

    /** Indicates an otherwise unspecified I/O error. */
    this.EIO = 'EIO';

    /** Indicates that the socket is connected. */
    this.EISCONN = 'EISCONN';

    /** Indicates that the path is a directory. */
    this.EISDIR = 'EISDIR';

    /** Indicates too many levels of symbolic links in a path. */
    this.ELOOP = 'ELOOP';

    /** Indicates that there are too many open files. */
    this.EMFILE = 'EMFILE';

    /** Indicates that there are too many hard links to a file. */
    this.EMLINK = 'EMLINK';

    /** Indicates that the provided message is too long. */
    this.EMSGSIZE = 'EMSGSIZE';

    /** Indicates that a multihop was attempted. */
    this.EMULTIHOP = 'EMULTIHOP';

    /** Indicates that the filename is too long. */
    this.ENAMETOOLONG = 'ENAMETOOLONG';

    /** Indicates that the network is down. */
    this.ENETDOWN = 'ENETDOWN';

    /** Indicates that the connection has been aborted by the network. */
    this.ENETRESET = 'ENETRESET';

    /** Indicates that the network is unreachable. */
    this.ENETUNREACH = 'ENETUNREACH';

    /** Indicates too many open files in the system. */
    this.ENFILE = 'ENFILE';

    /** Indicates that no buffer space is available. */
    this.ENOBUFS = 'ENOBUFS';

    /** Indicates that no message is available on the stream head read queue. */
    this.ENODATA = 'ENODATA';

    /** Indicates that there is no such device. */
    this.ENODEV = 'ENODEV';

    /** Indicates that there is no such file or directory. */
    this.ENOENT = 'ENOENT';

    /** Indicates an exec format error. */
    this.ENOEXEC = 'ENOEXEC';

    /** Indicates that there are no locks available. */
    this.ENOLCK = 'ENOLCK';

    /** Indications that a link has been severed. */
    this.ENOLINK = 'ENOLINK';

    /** Indicates that there is not enough space. */
    this.ENOMEM = 'ENOMEM';

    /** Indicates that there is no message of the desired type. */
    this.ENOMSG = 'ENOMSG';

    /** Indicates that a given protocol is not available. */
    this.ENOPROTOOPT = 'ENOPROTOOPT';

    /** Indicates that there is no space available on the device. */
    this.ENOSPC = 'ENOSPC';

    /** Indicates that there are no stream resources available. */
    this.ENOSR = 'ENOSR';

    /** Indicates that a given resource is not a stream. */
    this.ENOSTR = 'ENOSTR';

    /** Indicates that a function has not been implemented. */
    this.ENOSYS = 'ENOSYS';

    /** Indicates that the socket is not connected. */
    this.ENOTCONN = 'ENOTCONN';

    /** Indicates that the path is not a directory. */
    this.ENOTDIR = 'ENOTDIR';

    /** Indicates that the directory is not empty. */
    this.ENOTEMPTY = 'ENOTEMPTY';

    /** Indicates that the given item is not a socket. */
    this.ENOTSOCK = 'ENOTSOCK';

    /** Indicates that a given operation is not supported. */
    this.ENOTSUP = 'ENOTSUP';

    /** Indicates an inappropriate I/O control operation. */
    this.ENOTTY = 'ENOTTY';

    /** Indicates no such device or address. */
    this.ENXIO = 'ENXIO';

    /** Indicates that an operation is not supported on the socket. Note that while ENOTSUP and EOPNOTSUPP have the same value on Linux, according to POSIX.1 these error values should be distinct. */
    this.EOPNOTSUPP = 'EOPNOTSUPP';

    /** Indicates that a value is too large to be stored in a given data type. */
    this.EOVERFLOW = 'EOVERFLOW';

    /** Indicates that the operation is not permitted. */
    this.EPERM = 'EPERM';

    /** Indicates a broken pipe. */
    this.EPIPE = 'EPIPE';

    /** Indicates a protocol error. */
    this.EPROTO = 'EPROTO';

    /** Indicates that a protocol is not supported. */
    this.EPROTONOSUPPORT = 'EPROTONOSUPPORT';

    /** Indicates the wrong type of protocol for a socket. */
    this.EPROTOTYPE = 'EPROTOTYPE';

    /** Indicates that the results are too large. */
    this.ERANGE = 'ERANGE';

    /** Indicates that the file system is read only. */
    this.EROFS = 'EROFS';

    /** Indicates an invalid seek operation. */
    this.ESPIPE = 'ESPIPE';

    /** Indicates that there is no such process. */
    this.ESRCH = 'ESRCH';

    /** Indicates that the file handle is stale. */
    this.ESTALE = 'ESTALE';

    /** Indicates an expired timer. */
    this.ETIME = 'ETIME';

    /** Indicates that the connection timed out. */
    this.ETIMEDOUT = 'ETIMEDOUT';

    /** Indicates that a text file is busy. */
    this.ETXTBSY = 'ETXTBSY';

    /** Indicates that the operation would block. */
    this.EWOULDBLOCK = 'EWOULDBLOCK';

    /** Indicates an improper link. */
    this.EXDEV = 'EXDEV';

    /** Indicates an interrupted function call. */
    this.WSAEINTR = 'WSAEINTR';

    /** Indicates an invalid file handle. */
    this.WSAEBADF = 'WSAEBADF';

    /** Indicates insufficient permissions to complete the operation. */
    this.WSAEACCES = 'WSAEACCES';

    /** Indicates an invalid pointer address. */
    this.WSAEFAULT = 'WSAEFAULT';

    /** Indicates that an invalid argument was passed. */
    this.WSAEINVAL = 'WSAEINVAL';

    /** Indicates that there are too many open files. */
    this.WSAEMFILE = 'WSAEMFILE';

    /** Indicates that a resource is temporarily unavailable. */
    this.WSAEWOULDBLOCK = 'WSAEWOULDBLOCK';

    /** Indicates that an operation is currently in progress. */
    this.WSAEINPROGRESS = 'WSAEINPROGRESS';

    /** Indicates that an operation is already in progress. */
    this.WSAEALREADY = 'WSAEALREADY';

    /** Indicates that the resource is not a socket. */
    this.WSAENOTSOCK = 'WSAENOTSOCK';

    /** Indicates that a destination address is required. */
    this.WSAEDESTADDRREQ = 'WSAEDESTADDRREQ';

    /** Indicates that the message size is too long. */
    this.WSAEMSGSIZE = 'WSAEMSGSIZE';

    /** Indicates the wrong protocol type for the socket. */
    this.WSAEPROTOTYPE = 'WSAEPROTOTYPE';

    /** Indicates a bad protocol option. */
    this.WSAENOPROTOOPT = 'WSAENOPROTOOPT';

    /** Indicates that the protocol is not supported. */
    this.WSAEPROTONOSUPPORT = 'WSAEPROTONOSUPPORT';

    /** Indicates that the socket type is not supported. */
    this.WSAESOCKTNOSUPPORT = 'WSAESOCKTNOSUPPORT';

    /** Indicates that the operation is not supported. */
    this.WSAEOPNOTSUPP = 'WSAEOPNOTSUPP';

    /** Indicates that the protocol family is not supported. */
    this.WSAEPFNOSUPPORT = 'WSAEPFNOSUPPORT';

    /** Indicates that the address family is not supported. */
    this.WSAEAFNOSUPPORT = 'WSAEAFNOSUPPORT';

    /** Indicates that the network address is already in use. */
    this.WSAEADDRINUSE = 'WSAEADDRINUSE';

    /** Indicates that the network address is not available. */
    this.WSAEADDRNOTAVAIL = 'WSAEADDRNOTAVAIL';

    /** Indicates that the network is down. */
    this.WSAENETDOWN = 'WSAENETDOWN';

    /** Indicates that the network is unreachable. */
    this.WSAENETUNREACH = 'WSAENETUNREACH';

    /** Indicates that the network connection has been reset. */
    this.WSAENETRESET = 'WSAENETRESET';

    /** Indicates that the connection has been aborted. */
    this.WSAECONNABORTED = 'WSAECONNABORTED';

    /** Indicates that the connection has been reset by the peer. */
    this.WSAECONNRESET = 'WSAECONNRESET';

    /** Indicates that there is no buffer space available. */
    this.WSAENOBUFS = 'WSAENOBUFS';

    /** Indicates that the socket is already connected. */
    this.WSAEISCONN = 'WSAEISCONN';

    /** Indicates that the socket is not connected. */
    this.WSAENOTCONN = 'WSAENOTCONN';

    /** Indicates that data cannot be sent after the socket has been shutdown. */
    this.WSAESHUTDOWN = 'WSAESHUTDOWN';

    /** Indicates that there are too many references. */
    this.WSAETOOMANYREFS = 'WSAETOOMANYREFS';

    /** Indicates that the connection has timed out. */
    this.WSAETIMEDOUT = 'WSAETIMEDOUT';

    /** Indicates that the connection has been refused. */
    this.WSAECONNREFUSED = 'WSAECONNREFUSED';

    /** Indicates that a name cannot be translated. */
    this.WSAELOOP = 'WSAELOOP';

    /** Indicates that a name was too long. */
    this.WSAENAMETOOLONG = 'WSAENAMETOOLONG';

    /** Indicates that a network host is down. */
    this.WSAEHOSTDOWN = 'WSAEHOSTDOWN';

    /** Indicates that there is no route to a network host. */
    this.WSAEHOSTUNREACH = 'WSAEHOSTUNREACH';

    /** Indicates that the directory is not empty. */
    this.WSAENOTEMPTY = 'WSAENOTEMPTY';

    /** Indicates that there are too many processes. */
    this.WSAEPROCLIM = 'WSAEPROCLIM';

    /** Indicates that the user quota has been exceeded. */
    this.WSAEUSERS = 'WSAEUSERS';

    /** Indicates that the disk quota has been exceeded. */
    this.WSAEDQUOT = 'WSAEDQUOT';

    /** Indicates a stale file handle reference. */
    this.WSAESTALE = 'WSAESTALE';

    /** Indicates that the item is remote. */
    this.WSAEREMOTE = 'WSAEREMOTE';

    /** Indicates that the network subsystem is not ready. */
    this.WSASYSNOTREADY = 'WSASYSNOTREADY';

    /** Indicates that the winsock.dll version is out of range. */
    this.WSAVERNOTSUPPORTED = 'WSAVERNOTSUPPORTED';

    /** Indicates that successful WSAStartup has not yet been performed. */
    this.WSANOTINITIALISED = 'WSANOTINITIALISED';

    /** Indicates that a graceful shutdown is in progress. */
    this.WSAEDISCON = 'WSAEDISCON';

    /** Indicates that there are no more results. */
    this.WSAENOMORE = 'WSAENOMORE';

    /** Indicates that an operation has been canceled. */
    this.WSAECANCELLED = 'WSAECANCELLED';

    /** Indicates that the procedure call table is invalid. */
    this.WSAEINVALIDPROCTABLE = 'WSAEINVALIDPROCTABLE';

    /** Indicates an invalid service provider. */
    this.WSAEINVALIDPROVIDER = 'WSAEINVALIDPROVIDER';

    /** Indicates that the service provider failed to initialized. */
    this.WSAEPROVIDERFAILEDINIT = 'WSAEPROVIDERFAILEDINIT';

    /** Indicates a system call failure. */
    this.WSASYSCALLFAILURE = 'WSASYSCALLFAILURE';

    /** Indicates that a service was not found. */
    this.WSASERVICE_NOT_FOUND = 'WSASERVICE_NOT_FOUND';

    /** Indicates that a class type was not found. */
    this.WSATYPE_NOT_FOUND = 'WSATYPE_NOT_FOUND';

    /** Indicates that there are no more results. */
    this.WSA_E_NO_MORE = 'WSA_E_NO_MORE';

    /** Indicates that the call was canceled. */
    this.WSA_E_CANCELLED = 'WSA_E_CANCELLED';

    /** Indicates that a database query was refused. */
    this.WSAEREFUSED = 'WSAEREFUSED';

    /** Perform lazy binding. Node.js sets this flag by default. */
    this.RTLD_LAZY = 'RTLD_LAZY';

    /** Resolve all undefined symbols in the library before dlopen(3) returns. */
    this.RTLD_NOW = 'RTLD_NOW';

    /** Symbols defined by the library will be made available for symbol resolution of subsequently loaded libraries. */
    this.RTLD_GLOBAL = 'RTLD_GLOBAL';

    /** The converse of RTLD_GLOBAL. This is the default behavior if neither flag is specified. */
    this.RTLD_LOCAL = 'RTLD_LOCAL';

    /** Make a self-contained library use its own symbols in preference to symbols from previously loaded libraries. */
    this.RTLD_DEEPBIND = 'RTLD_DEEPBIND';

    this.UV_UDP_REUSEADDR = 'UV_UDP_REUSEADDR';
  }
}

module.exports = {
  /** @type {EnumconstsErrno} */
  errno: new EnumconstsErrno(),
  /** @type {EnumconstsSignals} */
  signals: new EnumconstsSignals(),

  /** @type {EnumconstsErrno} */
  ERRNO: new EnumconstsErrno(),
  /** @type {EnumconstsSignals} */
  SIGNALS: new EnumconstsSignals(),
};
